import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/killer-cf.png"
        alt="user image"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Kilder costa
        </span>
        <span className="truncate text-sm text-zinc-500">
          costa.kilder@live.com
        </span>
      </div>

      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-500"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
