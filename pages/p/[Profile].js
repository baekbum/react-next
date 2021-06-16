import Layout from "../component/Layout";
import { useRouter } from "next/router";

const Profile = () => {
    const router = useRouter();

    return (
        <Layout>
            <p>Hello, my name is {router.query.profile || 'unknown'}. I use next.js</p>
        </Layout>   
    );
}

export default Profile;