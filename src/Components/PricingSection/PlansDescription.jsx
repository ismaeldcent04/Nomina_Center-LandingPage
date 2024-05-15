import { PlansDescriptionTable } from "./PlansDescriptionTable"

export const PlansDescription = ()=>{
    return (
    <div className="plans-description_container">
      <div className="plans-description_header">
        <h1>Funcionalidades de cada plan</h1>
        <p>Compara los planes y elige el que mejor se ajusta a tu empresa</p>
      </div>
      <div className="plans-description_content">
       <PlansDescriptionTable/>
      </div>
    </div>
  )
}