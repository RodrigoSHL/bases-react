
const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <header>
                <h2>React Bases</h2>
            </header>
            <main>{children}</main>
            <footer>&copy; Rodrigo Catalan - {new Date().getFullYear()}</footer>
        </>
    )
}

export default Layout