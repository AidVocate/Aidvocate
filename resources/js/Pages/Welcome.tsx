import { Head } from '@inertiajs/react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Background from '@/Components/Background';
import Icon from '@/Components/Icon';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import { CardActionArea } from '@mui/material';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import HandshakeSharpIcon from '@mui/icons-material/HandshakeSharp';


interface InfoCardProps extends Children, ClassName {
    height: number;
    flex?: boolean;
}
function InfoCard({children, className, height, flex}: InfoCardProps) {
    return (
        <Card className={className}>
            <CardActionArea>
                <CardContent className={`min-h-${height} ${flex ? "flex justify-between" : null}`}>
                    {children}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

interface Props extends inertia.Auth {
    laravelVersion: string;
    phpVersion: string;
}
export default function Welcome({ auth, laravelVersion, phpVersion }: Props) {
    const theme = useTheme();
    return (
        <Background>
            <Head title="Welcome" />
            <AppBar>
                <Toolbar variant="dense" className="flex justify-between items-center">
                    <IconButton edge="start" color="inherit" aria-label="menu" className="mr-2">
                        <Icon size={40}/>
                        <Typography variant="h6" color="inherit" className="ml-2" component="div">
                            ADVOCAID
                        </Typography>
                    </IconButton>
                    <nav className="-mx-3 flex flex-1 justify-end">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="text-white"
                            >
                                Dashboard
                            </Link>
                        ) : (<>
                            <Link
                                href={route('login')}
                                className="rounded-md px-3 py-2 text-white"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-md px-3 py-2 text-white"
                            >
                                Register
                            </Link>
                        </>)}
                    </nav>   
                </Toolbar>
            </AppBar>
            <Container maxWidth="xl" className="text-white text-center mt-20 mb-40">
                <img src='/advocaid.webp' alt="Logo" className="w-96 h-auto mb-20 mx-auto" />
                <Typography variant="h1" gutterBottom>
                    Unlocking Justice
                </Typography>
                <Typography variant="h2" paragraph color="secondary">
                    Alberta's Gateway to Pro Bono Legal Assistance
                </Typography>
                <Typography variant="h5" paragraph>
                    AdvocAid is a pioneering online platform dedicated to enhancing access to justice in Alberta. It serves as a vital link between the public,
                    legal professionals, and pro bono organizations, ensuring pro bono legal assistance is accessible and efficient for everyone.
                </Typography>
            </Container>
            <div className="bg-gray-200">
                <main className="mt-3 flex items-center justify-center">
                    <Grid maxWidth="xl" className="my-6 px-5" container spacing={{ md: 1, lg: 2 }}>
                        <Grid item className="my-1" lg={6}>
                            <Typography variant="h4" fontWeight="bold" className="mb-2" color="primary">
                                Why AdvocAid
                            </Typography>
                            <InfoCard flex={true} height={24}>
                                <BusinessCenterSharpIcon
                                    className="mt-1 p-3 rounded-lg w-12 h-12"
                                    sx={{
                                        color: theme.palette.secondary.main,
                                        bgcolor: theme.palette.primary.main
                                    }}
                                />
                                <div className="ms-5">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Pro Bono Organizations at the Forefront
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Pro bono organizations can detail their services, including scope, eligibility 
                                        and geographic coverage. This clarity enables users to quickly find relevant
                                        legal aid programs.
                                    </Typography>
                                </div>
                            </InfoCard>
                            <InfoCard flex={true} height={28} className="mt-5">
                                <PersonOutlineSharpIcon
                                    className="mt-1 p-3 rounded-lg w-12 h-12"
                                    sx={{
                                        color: theme.palette.secondary.main,
                                        bgcolor: theme.palette.primary.main
                                    }}
                                />
                                <div className="ms-5">
                                    <Typography gutterBottom variant="h5" component="div">
                                        User-Friendly Experience for the Public
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        AdvocAid simplifies the process of seeking legal help. Users undergo a brief, AI-dirven interview
                                        to identify their specific legal needs, ensuring accurate matching with suitable pro bono programs.
                                    </Typography>
                                </div>
                            </InfoCard>
                            <InfoCard flex={true} height={28} className="mt-5">
                                <HandshakeSharpIcon
                                    className="mt-1 p-3 rounded-lg w-12 h-12"
                                    sx={{
                                        color: theme.palette.secondary.main,
                                        bgcolor: theme.palette.primary.main
                                    }}
                                />
                                <div className="ms-5">
                                    <Typography gutterBottom variant="h5" component="div">
                                        Engaging Lawyers and Law Firms
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lawyers create personal profiles to connect with tailored pro bono opportunities, while law firms
                                        track their collective contributions. This system enhances the visiblity of their community service efforts
                                        and supports their social responsibility initiatives.
                                    </Typography>
                                </div>
                            </InfoCard>
                            <div className="my-10">
                                <Typography variant="h4" fontWeight="bold" className="mb-2" color="primary">
                                    Who We Are
                                </Typography>
                                <Typography variant="body2">
                                    AdvocAid is being developed by GozAround Inc., an Alberta-based tech start-up with nearly 10 years experience in the corporate 
                                    social responsibility software space. GozAround was founded by Ben Block, an active member of the Law Society of Alberta 
                                    and is guided by advisor Robert Philp, retired Alberta Court of Justice judge and former Chief of the Alberta Human Rights Commission. 
                                </Typography>
                                <Divider className="mt-2" />
                            </div>
                        </Grid>
                        <Grid item className="my-1" lg={6}>
                            <Typography variant="h4" fontWeight="bold" className="mb-2" color="primary">
                                Key Benefits
                            </Typography>
                            <InfoCard height={24}>
                                <Typography className="p-1" gutterBottom variant="h5" component="div" sx={{
                                    color: "white",
                                    bgcolor: theme.palette.primary.main
                                }}>
                                    General Public
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Our mobile-friendly platform streamlines the matching of users with programs and simplifies intake. 
                                    This approach serves the goal of making justice more accessible and efficient. 
                                </Typography>
                            </InfoCard>
                            <InfoCard height={28} className="mt-5">
                                <Typography className="p-1" gutterBottom variant="h5" component="div" sx={{
                                    color: "white",
                                    bgcolor: theme.palette.primary.main
                                }}>
                                    Pro Bono Organizations
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Pro bono groups gain increased program visibility, automated client intake, better stakeholder engagement, 
                                    and simplified reporting, allowing them to focus on delivering quality legal services. 
                                </Typography>
                            </InfoCard>
                            <InfoCard height={28} className="mt-5">
                                <Typography className="p-1" gutterBottom variant="h5" component="div" sx={{
                                    color: "white",
                                    bgcolor: theme.palette.primary.main
                                }}>
                                    Legal Professionals
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lawyers and law firms benefit by efficiently connecting with personally relevant needs while tracking and quantifying 
                                    their pro bono contributions. 
                                </Typography>
                            </InfoCard>
                        </Grid>
                    </Grid>
                </main>
                <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                    <Typography variant="body2" color="text.secondary">
                        {'Copyright © '}
                        <Link color="inherit" href="https://www.gozaround.com/">
                            GozAround Inc
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link className="mx-1" color="inherit" href="tel:+ 1-888-472-0290">
                            + 1-888-472-0290
                        </Link>
                        <Link className="mx-1" color="inherit" href="mailto:info@gozaround.com">
                            info@gozaround.com
                        </Link>
                    </Typography>
                </footer>
            </div>
        </Background>
    );
}
