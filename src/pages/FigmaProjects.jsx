import FigmaComponents from "../components/FigmaComponents"
import { FaFigma } from "react-icons/fa6";
const FigmaProjects = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-x-20 gap-y-20 max-sm:gap-y-24 max-sm:gap-x-0">
      <FigmaComponents count={1} link="https://www.figma.com/design/WgRECuJv2Lza8sNaUmbS6t/DeKUT-Student-Portal?node-id=0-1&t=3x0uwC4DYhPGKilX-1" text="Student Portal" projectImage="/design1.jpg" description="A UI design for a revamped student portal" icon={<FaFigma />} ></FigmaComponents>
      <FigmaComponents count={2} link="https://www.figma.com/proto/NFXuIk00E0mpRvzNYYOLNH/MPESA?node-id=102-73&t=g1SDxSK2qGEIkoE6-1&scaling=scale-down&content-scaling=fixed&page-id=102%3A72" text="MPESA App" projectImage="/image3.jpg" description="A UI design for a revamped student portal" icon={<FaFigma />} ></FigmaComponents>
      <FigmaComponents count={3} link="https://www.figma.com/proto/j0fsPxPN9h4MCgLeS4mF5k/HeadPhones?node-id=1-72&t=ZRZohveowOPFcr8Z-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A71" text="E-Commerce" projectImage="/design2.jpg" description="A UI design for an E-commerce website. Your one-stop shop for all electronics." icon={<FaFigma />} ></FigmaComponents>
      <FigmaComponents count={4} link="https://www.figma.com/proto/TgCxtzqwPCqevf54v5b0NZ/NIKE?node-id=8-119&t=kr1pVcZ9OYqIPGHY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" text="Nike Landing Page" projectImage="/nike.jpg" description="A UI design for Nike Landing page. E-commerce platform for you ideal shoes." icon={<FaFigma />} ></FigmaComponents>
      <FigmaComponents count={5} link="https://www.figma.com/proto/WgRECuJv2Lza8sNaUmbS6t/DeKUT-Student-Portal?node-id=1-3&node-type=canvas&t=XROtrQM4XiPGscM7-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1" text="Food Ordering App" projectImage="/food.jpg" description="A UI design for a revamped student portal" icon={<FaFigma />} ></FigmaComponents>
      <FigmaComponents count={6} link="https://www.figma.com/proto/O4kE8YyxIzHn1HY0YC2MsN/Hello-Tractor?node-id=1-20&node-type=canvas&t=f3inhJYvLFCo57jQ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A20&show-proto-sidebar=1" text="Hello Tractor - Operator App" projectImage="/tractor.png" description="A UI design for Hello Tractor OPerator app" icon={<FaFigma />} ></FigmaComponents>
      <FigmaComponents count={7} link="https://www.figma.com/proto/2BHwFVk561d9mTAh3CYzwj/ELP_Linker?node-id=3-7&node-type=canvas&t=P75IvV0nIwFY67Bu-1&scaling=scale-down&content-scaling=fixed&page-id=3%3A6&starting-point-node-id=3%3A7" text="ELP linker" projectImage="/epl.png" description="A UI design for a website to link clients with service providers" icon={<FaFigma />} ></FigmaComponents>
    </div>
  )
}

export default FigmaProjects
