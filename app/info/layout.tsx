import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Info page",
};

export default function infoLayout({children, contacts, team}:{
    children:React.ReactNode,
    contacts:React.ReactNode, 
    team:React.ReactNode,
}){
    return (
        <div className="flex w-full flex-col justify-center text-center gap-5">
            {children}
            <div className=" grid grid-cols-2">
            {contacts}
            {team}

            </div>

        </div>
         
    )
}
