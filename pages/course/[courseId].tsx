import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {
    const test = context.params?.courseId as string
    return {
        props: {
            test
        },
    }
}

export async function getStaticPaths() {
    const paths: {params: {courseId: string}}[]= [
        {params:{courseId: '1'}},
        {params:{courseId: '2'}},
        {params:{courseId: '3'}},
    ]
    return {
        paths,
        fallback: false,
    };
}

type courseProps = {
    test: string;
}

export default function Post({ test }: courseProps ) {

    console.log(test)

    return (
        <>
            TEST
            {test}
        </>
    );
}