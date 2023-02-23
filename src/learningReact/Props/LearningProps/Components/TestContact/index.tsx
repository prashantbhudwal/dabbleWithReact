export default function TestContact(props: any) {
  console.log(props); // Props
  const { catData } = props;
  const { name, imageUrl, phoneNo, email } = catData;
  return (
    <div className="contact-card">
      <img src={imageUrl} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src="/src/Features/Template/images/phone-icon.png" />
        <p>(212) {phoneNo}</p>
      </div>
      <div className="info-group">
        <img src="/src/Features/Template/images/mail-icon.png" />
        <p>{email}</p>
      </div>
    </div>
  );
}
