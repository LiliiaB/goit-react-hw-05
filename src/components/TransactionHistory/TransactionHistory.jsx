import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.table}>
        <thead className={css.head}>
          <tr>
            <th className={css.item}>Type</th>
            <th className={css.item}>Amount</th>
            <th className={css.item}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={css.elements}>
                <td className={css.item}>{type}</td>
                <td className={css.item}>{amount}</td>
                <td className={css.item}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
