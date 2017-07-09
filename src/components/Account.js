import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { isEmpty } from 'ramda'

import Header from './Header'
import Footer from './Footer'

import MenuSideBar from './MenuSideBar'
import { Link } from 'react-router-dom'

const menuItems = [
    {label: 'Account Details', path: ''},
    {label: 'Organization', path: ''},
    {label: 'Users', path: ''},
    {label: 'Bank Accounts', path: ''},
    {label: 'Projects', path: ''},
    {label: 'Virtual Cards', path: ''},
    {label: 'Transaction History', path: ''},
    {label: 'Marketplace', path: ''}
]

const styleMain = {minHeight: '595px'}
const enhance = compose(
  connect(state => ({ suppliers: state.suppliers }))
)

class Account extends React.Component {

  static defaultProps = {
  }

  deploy () {
    global.deployContract()
  }

  render () {
    const styleBorderLeft = {borderLeft: '1px solid rgba(0,0,0,.12)'}
    const styleH3 = {margin: 0}
    const styleH3Right = {margin: 0, textAlign: 'right'}
    const styleTable = {width: '98%', padding: '16px', borderLeft: 0, margin: '0 0 0 16px', borderRight: 0}

    const { suppliers } = this.props

    const SuppliersTable = ({ suppliers, select }) => (
      <table className="mdl-data-table mdl-data-table--selectable" style={styleTable}>
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Material</th>
            <th>Cost</th>
            <th>Quality</th>
            <th>Lead Time</th>
            <th>Rating</th>
            <th>Verified</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        { suppliers.map((s, i) => {
            return (<tr key={i}>
              <td className="mdl-data-table__cell--non-numeric">{s.name}</td>
              <td>{s.cost}</td>
              <td>{s.quality}</td>
              <td>{s.leadTime}</td>
              <td>{s.rating}</td>
              <td>{s.verified}</td>
              <td>
                <Link className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" style={{width: '120px'}} to={'/account'} onClick={this.deploy}>Select</Link>
              </td>
            </tr>)
        })}

        </tbody>
      </table>)

    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <main className="mdl-layout__content">
            <div className="page-content">
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--3-col">
                        <MenuSideBar menuItems={menuItems} />
                    </div>
                    <div className="mdl-cell mdl-cell--9-col sb-project-vote" style={styleBorderLeft}>
                        <div className="mdl-grid">
                          { isEmpty(suppliers) ?
                              <p className="sb-no-project">No suppliers yet</p> :
                              <SuppliersTable suppliers={suppliers} /> }
                        </div>
                    </div>
                </div>
            </div>
          </main>
        </div>
    )
  }

}

export default enhance(Account)
