import { FaGears } from "react-icons/fa6";
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import { leadsList } from "../../Constants/dummyList";

const Table = () => {
    return <table className="m-2 bg-white shadow shadow-gray-500">
        <thead>
            <tr className="truncate bg-gray-50">
                <th className="p-3"><input type="checkbox" name="" id="" /></th>
                <th className="p-3"><FaGears /></th>
                <th className="p-3">Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Assigned To</th>
                <th className="p-3">Purpose</th>
                <th className="p-3">Type</th>
                <th className="p-3">Status</th>
                <th className="p-3">Source</th>
                <th className="p-3">Email</th>
                <th className="p-3">Address</th>
            </tr>
        </thead>
        <tbody>
            {
                leadsList.map((item, index) => {
                    return (
                        <tr className="truncate" key={index}>
                            <td className="p-3"><input type="checkbox" name="" id="" /></td>
                            <td className="p-3"><HiMiniEllipsisVertical /></td>
                            <td className="p-3">{item.name}</td>
                            <td className="p-3">{item.phone}</td>
                            <td className="p-3">{item.assignedTo}</td>
                            <td className="p-3">{item.purpose}</td>
                            <td className="p-3">{item.type}</td>
                            <td className="p-3">{item.status}</td>
                            <td className="p-3">{item.source}</td>
                            <td className="p-3">{item.email}</td>
                            <td className="p-3">{item.address}</td>
                        </tr>
                    );
                })
            }
        </tbody>
      </table>
}

export default Table;
