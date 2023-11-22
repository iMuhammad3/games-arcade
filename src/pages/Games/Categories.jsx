export const Categories = () => {
  return (
    <select className="bg-slate-750 px-5 py-2 rounded-lg cursor-pointer outline-none">
        <option selected>All Games</option>
        <option value="Fun" >Fun</option>
        <option value="Educational" >Educational</option>
        <option value="Desktop" >Desktop/Laptop</option>
        <option value="Others" >Others</option>
    </select>
  )
}
