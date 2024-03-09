
export default function Friend({ friend }) {
   const{name,email}=friend;
    return (
        <div className="box">
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
        </div>
    )
}