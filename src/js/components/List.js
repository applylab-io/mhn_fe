import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
    <ul style = {articleStyle}>
        {articles.map(el => (
            <li key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);

const articleStyle = {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    justifyContent: 'space-evenly',
    alignItems: 'center'
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;