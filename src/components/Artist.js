import React, { Component } from 'react'
import styled from 'styled-components'

class Artist extends Component {
    render () {
        return (
            <div>
                <div className="artist-photo">
                    <a >
                        <img src="https://kayapati.com/demo/lavan/wp-content/uploads/ultimatemember/12/profile_photo-300x300.jpg?1621604840" width={300} height={300} className="gravatar" />
                    </a>
                </div>
                <Name>
                    <h3><a >Ilina Koorla</a></h3>
                </Name>
            </div>
        )
    }
}

export default Artist;

const Name = styled.div`
  & > h3 {
    color: #f9f9f9 !important;
    margin-top: 10px;
  }
`