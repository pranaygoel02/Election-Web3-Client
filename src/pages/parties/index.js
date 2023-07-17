import BasicTable from "@/components/BasicTable";
import Input from "@/components/Input";
import { useStateContext } from "@/context";
import { useState, useEffect } from "react";

function index() {
  const [newPartyName, setNewPartyName] = useState(null);
  const [newPartySymbol, setNewPartySymbol] = useState(null);
  const [newPartySlogan, setNewPartySlogan] = useState(null);
  const [stateId, setStateId] = useState(null);
  const [isNational, setIsNational] = useState(false);

  const { states, getStates, addNewParty, getParties, parties } = useStateContext();
  
  useEffect(() => {
      getStates()
  }, [])

  useEffect(() => {
    getParties()
  },[])

  if(!states) return null;

  console.log(states);

  const inputs = [
    {
      cb: setNewPartyName,
      value: newPartyName,
      required: true,
      show: true,
      type: "text",
      id: "partyName",
      name: "partyName",
      label: "New Party Name",
    },
    {
      cb: setNewPartySymbol,
      value: newPartySymbol?.value,
      required: true,
      show: true,
      type: "file",
      id: "partySymbol",
      name: "partySymbol",
      label: "New Party Symbol",
    },
    {
      cb: setNewPartySlogan,
      value: newPartySlogan,
      required: true,
      show: true,
      type: "text",
      id: "partySlogan",
      name: "partySlogan",
      label: "New Party Slogan",
    },
    {
      cb: setStateId,
      value: stateId,
      required: true,
      show: true,
      type: "select",
      options: states?.map(state => (
        {
            value: state.id - 1,
            label: state.name
        }
      )),
      id: "stateId",
      name: "stateId",
      label: "State",
    },
    {
      cb: setIsNational,
      value: isNational,
      required: true,
      show: true,
      type: "select",
      options: [
        {
            value: true,
            label: 'Yes'
        },
        {
            value: false,
            label: 'No'
        }
      ],
      id: "isNational",
      name: "isNational",
      label: "National Status",
    },
  ];

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
      header: 'National Status',
      accessorKey: 'isNational',
    },
    {
      header: 'Leader',
      accessorKey: 'leader',
    },
    {
      header: 'State Id',
      accessorKey: 'state',
    }
  ]

  const [showAdd, setShowAdd] = useState(false)


  return (
    <div className="container">
      <div className="w-full inline-flex items-center justify-between">
      <h1 className="heading">Parties</h1>
      <button className="primary-btn" onClick={() => setShowAdd(prev => !prev)}>{showAdd ? 'Hide' : 'Add New Party'}</button>
      </div>
      {showAdd && <form onSubmit={(e) => {
            e.preventDefault()
            addNewParty(newPartyName, newPartySymbol?.file, newPartySlogan, stateId, isNational)
        }}>
        {inputs?.map((input, index) => (
          <Input
            {...input}
            />
        ))}
        <button className="primary-btn" type="submit">
          Add
        </button>
      </form>}
      {!showAdd && parties && <BasicTable columns={columns} data={parties} />}
    </div>
  );
}

export default index;
