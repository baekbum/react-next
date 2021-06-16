import Layout from "./component/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const ProfileLink = (props) => (
    <div>
        <Link href={`/p/[profile]`} as={`/p/${props.profile.Name}`}>
            <a>Go to {props.profile.Name}'s profile</a>
        </Link>
    </div>
);

const Index = (props) => (
    <Layout>
        <h1>Friends List</h1>
        <ProfileLink profile={props.profile} />
    </Layout>
);

Index.getInitialProps = async () => {
    const res = await fetch("https://tools.learningcontainer.com/sample-json-file.json");
    const data = await res.json();

    return {
      profile: data
    };
};

export default Index;