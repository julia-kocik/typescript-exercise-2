import React, { useState, useEffect } from 'react';
import {userObj} from './data/data';
import {accountsObj} from './data/data';

interface GetUserResponse {
  email: string;
}
interface GetBankAccountsResponse {
  accounts: Array<{
    // Typ number uzyty dla uproszczenia zadania
    balance: number;
  }>;
}

interface UserDetailsViewProps {
  pageNo: number;
}

export const UserDetailsView = (props: UserDetailsViewProps) => {
  // Implementation...
  const [user, setUser] = useState<GetUserResponse | null>(null)
  const [account, setAccount] = useState<GetBankAccountsResponse | null>(null)
  const [pageNumber, setPageNumber] = useState<number>(props.pageNo);
  useEffect(() => {
    const fetchUser = async () => {
      await setTimeout(() => {
        setUser(userObj)
      }, 3000);
    };
    const fetchAccounts = async () => {
      await setTimeout(() => {
        setAccount(accountsObj)
      }, 3000);
    };

    fetchUser();
    fetchAccounts();
  }, [pageNumber]);

  return (
    user === null || account === null ?
    <h1>Loading</h1>
    :
    <div>
        <h1>User is: {user?.email}</h1>
        {account.accounts.map((item) => (
            <p>{item.balance}</p>
        ))}
        <input
        type="number"
        value={pageNumber}
        min={0}
        max={5}
        onChange={event => setPageNumber(parseInt(event.target.value))}
      />
      <h1>Page Number is: {pageNumber}</h1>
    </div>
  )
};
