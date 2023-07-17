import {useEffect, useState} from "react";
import Input from "@/components/Input";
import { useStateContext } from "@/context";
import BasicTable from "@/components/BasicTable";

function index() {

    const {addNewState, states, getStates, isElectionCommission } = useStateContext();
    const [newState, setNewState] = useState(null)

    if(!isElectionCommission) return null;

    useEffect(() => {
        getStates()
    }, [])
    

    console.log(states);

    const columns = [
        {
          header: 'ID',
          accessorKey: 'id',
        },
        {
          header: 'Name',
          accessorKey: 'name',
        },
        {
          header: 'Constiuencies',
          accessorKey: 'constituencies',
        },
        {
          header: '',
          accessorKey: 'linkToConstituencies',
        }
      ]

    return (
    <div className="container">
      <h1 className="heading">States</h1>
      <form onSubmit={addNewState}>
        <Input
          cb={setNewState}
          value={newState}
          required={true}
          show={true}
          type="text"
          id="state"
          name="state"
          label="New State Name"
        />
        <button className="primary-btn" type="submit">
          Add
        </button>
      </form>
      {states && <BasicTable columns={columns} data={states} />}
    </div>
  );
}

export default index;
