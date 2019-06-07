import React from 'react'

import { RepositoryItemWrapper } from "./repositoryItem.style";
import moment from "moment";
export default function RepositoryItem(props) {

  const getDaysSince = (time) => {
    let days = moment().diff(props.info.createdAt, 'days');
    if(days > 365) {
      return moment().diff(props.info.createdAt, 'years') + " Years Ago";
    }
    return days + " Days Ago";
  }
  return (
    <RepositoryItemWrapper>
      {props.info.name}
      <div className="createdAtWrapper">
        Created: <span>{getDaysSince(props.info.createdAt)}</span>
      </div>
      <button onClick={props.setSelectedRepo}>Select Repo</button>
      
    </RepositoryItemWrapper>
  )
}
