"use client";

function UserEmail({params}) {
    const userEmail = decodeURIComponent(params.userEmail)
    return(
        <div className="main">{userEmail}</div>
    )
}

export default UserEmail;