async function fetchGitHubUsers() {
  //https://api.github.com/search/users?q=greg
  const res = await fetch("https://api.github.com/search/users?q=greg");
  const users = await res.json();
  return users.items;
}
const GitHubUsersPage = async () => {
  const users = await fetchGitHubUsers();
  console.log(users);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {users.map((user)=>{
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                    console.log(user.id)
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.avatar_url}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
           })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default GitHubUsersPage;
