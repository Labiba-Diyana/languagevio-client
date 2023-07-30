

const SinglePayment = ({ payment, index }) => {
    const { name, userEmail, price, date } = payment;

    const newDate = new Date(date);

    // Define the formatting options
    const options = {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    return (
        <tr className="font-semibold text-lg">
            <th>{index + 1}</th>
            <td className="text-xl">{name}</td>
            <td>{userEmail}</td>
            <td className="pl-12">${price}</td>
            <td>{new Intl.DateTimeFormat('en-US', options).format(newDate)}</td>

        </tr>
    );
};

export default SinglePayment;