import React, { useContext } from 'react';
import Card from './card';
import { UserContext } from '../index.js'

export default function AllData(){
    const { value, setValue } = useContext(UserContext);
    let users = [...value.users];

  return (
    <>
        {users.map((element,i) => {
            return(
                <Card
                    bgcolor="primary"
                    txtcolor="white"
                    header={"Account# " + i}
                    title={element.name}
                    body={(
                        <>
                            <p>
                            {"Email:  " + element.email}
                            </p>
                            <p>
                            {"Password:  " + element.password}
                            </p>
                            <p>
                            {"Balance:  " + element.balance}
                            </p>
                        </>
                    )}
                />
            )
        })}
    </>
  )
}