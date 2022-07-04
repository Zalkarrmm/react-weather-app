import cls from './DegreeCard.module.scss'
const DegreeCard = () => {
  return (
    <div className={cls.weatherItemHourly}>
      <p className={cls.weatherTime}>NOW</p>
      <img src="" alt="icon" />
      <p>72</p>
    </div>
  )
}

export default DegreeCard