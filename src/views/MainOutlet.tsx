import React from 'react'
import { Outlet } from 'react-router-dom'
import type { FC } from 'react'

export const Layout: FC = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/hello">Hello</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;