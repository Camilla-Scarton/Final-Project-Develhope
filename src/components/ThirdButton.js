export function ThirdButton({name}) {
    return (
        <div>
            <button className="shadow-xl text-white rounded-md px-5 w-[250px] py-2 m-5 bg-gradient-to-r from-blue-900 to-purple-800 hover:from-purple-800 hover:to-blue-900  dark:hover:from-blue-400 dark:hover:to-violet-500 hover:scale-105 transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)] dark:to-blue-400 dark:from-violet-500"><span>{name}</span></button>
        </div>
    )
}