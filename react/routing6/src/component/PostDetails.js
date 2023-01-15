import React from 'react';
import {useParams,useSearchParams} from 'react-router-dom';

const PostDetails = (props) => {
    let params = useParams();
    let [searchParams] = useSearchParams();
    return(
        <div class="panel panel-info">
            <div class="panel-heading">
             {params.topic} Details Page
            </div>
            <div class="panel-body">
                <h1>{params.topic} Details Page</h1>
                <p>{params.topic} Details Page is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
                <h3>You are on page number {searchParams.getAll('page')}</h3>
            </div>
        </div>
    )
}

export default PostDetails;