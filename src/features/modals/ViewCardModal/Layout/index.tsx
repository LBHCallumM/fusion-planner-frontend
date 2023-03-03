interface Props {
  top: React.ReactNode;
  //   bottom: React.ReactNode;
  right: React.ReactNode;
}

const Layout = ({ top, right }: Props) => {
  return (
    <div className="w-full h-full grid grid-rows-[auto,1fr] sm:grid-rows-1 sm:grid-cols-[2fr,1fr] md:grid-cols-[3fr,1fr]">


        <>{top}</>
        <>{right}</>
     
    </div>
  );
};

export default Layout;

