import React from 'react';

const total = 100;
var owner_count = 1;
export default class Creator extends React.Component {

    state = {
        count: 0,
        creators: [{ name: 'cryptogod', ownership: 100 }]
    }


    addCreator() {
        owner_count++;
        this.setState({
            creators: [...this.state.creators, { name: '', ownership: ' ' }]
        })
    };

    deletCreator(e) {
        var tempArr = this.state.creators;
        tempArr.splice(e, 1);
        this.setState({ creators: tempArr });

        var newCount = 100;
        for (var i = 0; i < this.state.creators.length; i++) {
            newCount -= this.state.creators[i].ownership;
        }
        this.setState({ count: newCount });
    }

    changeOwnership(event) {
        //   change the current input
        var tempArr = this.state.creators;
        tempArr[event.target.id].ownership = event.target.value;
        this.setState({ creators: tempArr });

        // change the calunter value
        var newCount = 100;
        for (var i = 0; i < this.state.creators.length; i++) {
            newCount -= this.state.creators[i].ownership;
        }
        this.setState({ count: newCount });
    }

    changeName(event) {
        var tempArr = this.state.creators;
        tempArr[event.target.id].name = event.target.value;
        this.setState({ creators: tempArr });
    }
    render() {

        return (
            <div>
                {this.state.creators.map((content, i) => {
                    return <div className="form-row" key={i} style={{ marginBottom: 16 }}>
                        <div className="col-md-5">
                            {i === 0 ?
                                <input type="name" className="form-control" value={content.name} readOnly />
                                : <input type="name" className="form-control" placeholder="username" id={i} value={content.name} onChange={this.changeName.bind(this)} />
                            }
                        </div>
                        <div className="col-md-4">
                            {/* {i === 0 ?
                                <input type="number" value={content.ownership} className="form-control" id="quantity" name="quantity" min="0" max="100" readOnly />
                                : */}
                            <input type="number" value={content.ownership} id={i} className="form-control" placeholder='00' onChange={this.changeOwnership.bind(this)} />
                            {/* } */}
                        </div>
                        <div className="col-md-2"> % credit </div>
                        {i === 0 ? <div></div> : <div className="col-md-1" style={{ cursor: 'pointer' }} onClick={() => this.deletCreator(i)}> X </div>}
                    </div>
                }
                )}
                {this.state.count === 0 ? <p></p> : <b style={this.state.count < 0 ? { color: 'red' } : { color: 'black' }}>You have {this.state.count} credits left. Total credies need to be 100.</b>}

                <div style={{ cursor: 'pointer', color: 'blue' }} onClick={() => this.addCreator()} id="add_people">Add a collaborator +</div>
                <br />
                {this.state.count === 0 ? <button>submit</button> : <button disabled>submit</button>}
            </div>
        )

    }
}