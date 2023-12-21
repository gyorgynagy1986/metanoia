import Sections from "@/components/Sections/Sections";
import { section_6 as section } from "@/data/data";
import sectionPhoto from "../../public/assets/vscc.svg";

import withSectionProps from "@/app/hooks/withSectionProps";

const styleMody = 'noiKor'

const NoiKor = withSectionProps(Sections, section, sectionPhoto, styleMody);

export default NoiKor;