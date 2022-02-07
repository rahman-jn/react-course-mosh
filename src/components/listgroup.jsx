import React, { Component } from 'react'


export const  ListGroup = (props) => {
    const {items, onSelectGenre, currentGenre,textProperty, valueProperty} = props;
        return (<div>
                    <ul className="list-group">
                        {items.map( item => 
                         <li onClick={() => onSelectGenre(item)} key={item[valueProperty]}
                          className= { currentGenre === item ? "list-group-item active" : "list-group-item" }>
                             {item[textProperty]}
                        </li>
                )}
                    </ul>
        </div>)
    };

ListGroup.defaultProps = {
    textProperty : "name",
    valueProperty : "_id"
}

// class ListGroup  extends React.Component {
//     render() { 
//         return  (
//             this.props.genres.map(genre =>
//             <button key={ genre._id } type="button"
//              className="list-group-item list-group-item-action"
//              onClick = {this.props.onGenreSelect(genre._id)}
//              >
//                 { genre.name }
//             </button>
//         )
//         );
//     }
// }

// export default List;