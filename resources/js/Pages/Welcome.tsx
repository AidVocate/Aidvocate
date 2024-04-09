import { Head } from '@inertiajs/react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import { CardActionArea } from '@mui/material';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import HandshakeSharpIcon from '@mui/icons-material/HandshakeSharp';
import Footer from '@/Components/Footer';
import Background from '@/Components/Background';
import NavBar from '@/Components/NavBar';

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
//(auth, laravelVersion, phpVersion) 
export default function Welcome({ auth }: Props) {
    const theme = useTheme();
    return (
        <Background>
            <Head title="Welcome" />
            <NavBar routes={auth.user ? ([
                {name: "Dashboard", route: "dashboard"},
            ]) : ([
                {name: "Login", route: "login"},
                {name: "Register", route: "register"}
            ])}/>
            <Container maxWidth="xl" className="text-white text-center mb-40"> 
                <Typography className="mt-20" variant="h1" gutterBottom>
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
                            <InfoCard flex={true} height={32}>
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
                            <InfoCard flex={true} height={32} className="mt-5">
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
                                        AdvocAid simplifies the process of seeking legal help. Users undergo a brief, AI-driven interview
                                        to identify their specific legal needs, ensuring accurate matching with suitable pro bono programs.
                                    </Typography>
                                </div>
                            </InfoCard>
                            <InfoCard flex={true} height={36} className="mt-5">
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
                            <InfoCard height={32}>
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
                            <InfoCard height={32} className="mt-5">
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
                            <InfoCard height={36} className="mt-5">
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
                <Footer/>
            </div>
        </Background>
    );
}
