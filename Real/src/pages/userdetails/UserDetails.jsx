import React from "react";
import { useParams } from 'react-router-dom';
import GitHubRepos from "../../DesignSystem/ComplexComponents/GitHubRepos";
import GitHubOrganizations from "../../DesignSystem/ComplexComponents/GitHubOrganizations";
import GitHubFollowers from "../../DesignSystem/ComplexComponents/GitHubFollowers";

function Menu() {
    const { id } = useParams();
     
    return (
        <div>
            <GitHubRepos userId={id} />
            <hr/>
            <GitHubOrganizations userId={id}/>
            <hr/>
            <GitHubFollowers userId={id} />
        </div>
    );
}

export default Menu;