import React from 'react'
import Header from "../Header";

const LayoutHoc = Component => {
    class HOC extends React.Component {
        render() {
            return (
                <>
                    <Header/>
                    <Component {...this.props} />
                </>
            )
        }
    }
    return HOC
}
export default LayoutHoc;