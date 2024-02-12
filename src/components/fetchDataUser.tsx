import { User } from "@/types/users";
import { DataGrid } from "@mui/x-data-grid";

export const FetchDataUser = ({ users }: { users: User | undefined }) => {
  if (!users) return <p>Loading...</p>;

  const columns = [
    { field: "id", width: 160 },
    { field: "username", width: 160 },
    { field: "email", width: 300 },
    { field: "phone", width: 300 },
    { field: "website", width: 200 },
    {
      field: "company",
      headerName: "Company",
      width: 200,
      valueGetter: (params: any) => params.row.company.name,
    },
  ];

  const rows: any = users;

  return (
    <>
      <hr />
      <p>Fetch Data from jsonplaceholder users</p>
      <DataGrid columns={columns} rows={rows} />
    </>
  );
};
