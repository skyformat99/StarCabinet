import { connect }                  from 'react-redux'
import RepoReadme                   from '../components/repoReadme'
import Actions                      from '../actions'

// Redux connection
const mapStateToProps = (state) => {
    return {
        selectedRepo: state.selectedRepo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchRepoReadMe: (repo) => {
            return dispatch(Actions.fetchRepoReadMe(repo))
        }
    }
}

// Which props to inject from the global atomic state
export default connect(mapStateToProps, mapDispatchToProps)(RepoReadme)
