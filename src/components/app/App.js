import React, {Component} from "react";
import './app.css';
import TitleHeader from "../headerTitle/headerTitle";
import HeaderScope from "../headerScope/headerScope";
import SearchPanel from "../searchPanel/searchPanel";
import FilterGroup from "../filterGroup/filterGroup";
import ListItem from "../listItem/listItem";
import AddItem from "../addItem/addItem";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {name: 'Купить пену для бритья', important: false, like: false, key: 'frg'},
        {name: 'Доделать квартальный отчёт', important: false, like: false, key: 'ott'},
        {name: 'Записаться на плавание', important: false, like: true, key: 'ere'}
      ],
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onImportant = this.onImportant.bind(this);
    this.onLiked = this.onLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.maxKey = 4;
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.key === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  addItem(body) {
    const newItem = {
      name: body,
      important: false,
      like: false,
      key: this.maxKey++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  onImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.key === id);
      const old = data[index];
      const newItem = {...old, important: !old.important};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    });
  }

  onLiked(id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.key === id);
      const old = data[index];
      const newItem = {...old, like: !old.like};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    });
  }

  SearchPosts(items, term) {
    if(term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.toLowerCase().indexOf(term) > -1;
    })
  }

  filterPosts(items, filter) {
    if(filter === 'all') {
      return items;
    }
    return items.filter(item => {
      return item.like;
    });
  }
  

  onUpdateSearch(term) {
    this.setState({term});
  }

  onFilterSelect(filter) {
    this.setState({filter})
  }

  render() {
    const {data, term, filter} = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;
    const visiblePosts = this.filterPosts(this.SearchPosts(data, term), filter);

    return (
      <div className='app'>
        <div className='headerWrapper'>
          <TitleHeader/>
          <HeaderScope liked={liked} allPosts={allPosts}/>
        </div>
        <div className='appSearchPanel'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <FilterGroup filter={filter} onFilterSelect ={this.onFilterSelect}/>
        </div>
        <ListItem 
          data={visiblePosts} 
          onDelete={this.deleteItem}
          onImportant={this.onImportant}
          onLiked={this.onLiked} />
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}
