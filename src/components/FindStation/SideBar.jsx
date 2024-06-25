/* eslint-disable react/prop-types */
function SideBar({ stationSelector, stations }) {
  return (
    <>
      <div>Sidebar</div>
      {stations.map((station) => (
        <div key={station.name}>
          <button onClick={() => stationSelector(station.position)}>
            {station.name}
          </button>
        </div>
      ))}
    </>
  )
}

export default SideBar
