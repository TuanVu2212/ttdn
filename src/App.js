import {publicRoutes} from "./routes";
import {Route, Routes} from "react-router-dom";
import {Fragment} from "react";
import LayoutDefault from "./component/layout/default";

function App() {
    return (
        <Routes>
            {
                publicRoutes.map((routes, index) => {
                    const Page = routes.component
                    let Layout = LayoutDefault
                    if (routes.layout) {
                        Layout = routes.layout
                    } else if (routes.layout === null) {
                        routes.layout = Fragment
                    }
                    console.log('public routes')
                    return (
                        <Route
                            key={index}
                            path={routes.path}
                            element={(<Layout><Page/></Layout>)}/>
                    )
                })
            }
        </Routes>
    )
}

export default App;
