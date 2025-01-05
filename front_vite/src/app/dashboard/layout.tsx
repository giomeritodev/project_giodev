import {Outlet} from 'react-router-dom'
import { AppSidebar } from "../../components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "../../components/ui/sidebar"
import { Header } from '../../components/header'

export function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
            <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}