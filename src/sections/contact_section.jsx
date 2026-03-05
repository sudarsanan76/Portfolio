import { MailOutline, PhoneIphone, LinkedIn, Send } from '@mui/icons-material';

const ContactCard = ({ icon, label, value, link, color }) => (
  <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex flex-col items-center p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
  >
    {/* Animated Background Glow */}
    <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${color}`}></div>

    <div className={`mb-4 p-4 rounded-2xl bg-slate-50 text-slate-700 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500`}>
      {icon}
    </div>
    
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">{label}</span>
    <span className="text-lg font-semibold text-slate-800 break-all text-center">{value}</span>
    
    <div className="mt-4 flex items-center gap-2 text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span>Connect</span>
      <Send sx={{ fontSize: 14 }} />
    </div>
  </a>
);

const ContactSection = () => {
  const contacts = [
    {
      icon: <MailOutline fontSize="large" />,
      label: "Email",
      value: "sudarsanan76@gmail.com",
      link: "mailto:sudarsanan76@gmail.com",
      color: "bg-blue-400"
    },
    {
      icon: <PhoneIphone fontSize="large" />,
      label: "Mobile",
      value: "+91 7708110066",
      link: "tel:+917708110066",
      color: "bg-emerald-400"
    },
    {
      icon: <LinkedIn fontSize="large" />,
      label: "LinkedIn",
      value: "Sudarsanan Kumar",
      link: "https://www.linkedin.com/in/sudarsanan-kumar/",
      color: "bg-indigo-400"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight hover:text-red-500 transition-colors duration-500 ease-in-out">
            Let's Build Something Great
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Ready to explore collaborative opportunities? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, idx) => (
            <ContactCard key={idx} {...contact} />
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-sm font-medium tracking-wide">
            © 2024 SUDARSANAN K • BENGALURU, INDIA
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;