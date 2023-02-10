import React from 'react';
import { 
    Input, 
    Row, 
    Col, 
    
} from 'antd';

const { Search } = Input;
const SearchBox = ({searchHandler}) => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Search
                    placeholder="enter movie, series, episode name"
                    enterButton="Search"
                    size="large"
                    onSearch={value => searchHandler(value)}
                />
            </Col>
        </Row>
    )
}
export default SearchBox;