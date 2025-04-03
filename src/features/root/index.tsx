import { FormHouzinzei } from './_components/form-houzinzei'

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-4 px-4 py-8">
      <h1 className="text-2xl font-bold">こうちゃん・秘密の計算機</h1>
      <FormHouzinzei />
    </div>
  )
}
