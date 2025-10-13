import Link from 'next/link'
import "@styles/var.css";
import "@styles/foundation.css";

type PageCardProps = {
    title: string;
    description: string;
    date: string;
    genre: string;
    path: string;
}
  
  const PageCard = ({ title, description, date, genre, path }: PageCardProps) => {

    return (
        <Link href={path} className="pageCard">
            <div>
                <p>{genre}</p>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{date}</p>
            </div>
        </Link>
    );
  };
  
  export default PageCard;