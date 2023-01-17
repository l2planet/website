/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { wrapn } from 'wrapn';
import { LoginForm } from '../../components/Form';
import { H1 } from '../../components/H';
import { Link } from '../../components/Link';
import { Seo } from '../../components/Seo';
import { authLogin } from '../../functions/api';

const Members: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <Seo title='L2 Planet | Login' />

            <H1>Login</H1>

            <Div>
                <LoginForm
                    onSubmit={async (formData) => {
                        try {
                            await authLogin(formData);
                            alert('Succesfully logged in!');
                            router.push('/members/panel');
                        } catch (e: any) {
                            alert(e.message);
                        }
                    }}
                />

                <Link a={A} href='/members/register'>
                    Don't have an account? Register
                </Link>
            </Div>
        </>
    );
};

export default Members;

const Div = wrapn('div')`
    flex
    flex-col
    
    space-y-6
`;

const A = wrapn('a')`
    text-center
    
    font-semibold

    active:text-slate-500

    duration-200
`;
