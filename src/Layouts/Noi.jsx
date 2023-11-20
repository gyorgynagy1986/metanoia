import Sections from "@/components/Sections/Sections";
import { section_4 as section } from "@/data/data";
import sectionPhoto from "../../public/assets/vscc.svg";

import withSectionProps from "@/app/hooks/withSectionProps";

const styleMody = 'noi'

const Noi = withSectionProps(Sections, section, sectionPhoto, styleMody);

export default Noi;