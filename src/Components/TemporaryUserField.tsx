import React from 'react';
import { TemporaryUser } from "../models/TemporaryUser";


type TemporaryUserFieldProps = {
    temporaryUser: TemporaryUser
}

const TemporaryUserField: React.FC<TemporaryUserFieldProps> = ({ temporaryUser }) => {
  return (
    <div>
     Tere {temporaryUser.temporaryName} {temporaryUser.temporarySurname}
    </div>
  )
}

export default TemporaryUserField