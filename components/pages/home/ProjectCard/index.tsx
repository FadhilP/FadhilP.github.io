import { Fragment, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "rooks";

interface ProjectCardProp {
  name: string;
  description?: JSX.Element;
  image?: string;
  backgroundColor?: string;
}

export default function ProjectCard(props: ProjectCardProp) {
  const { name, description, image } = props;

  const [openModal, setOpenModal] = useState(false);
  const modal = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  useOutsideClick(modal, () => openModal && setOpenModal(false));

  return (
    <Fragment>
      <motion.div
        className="flex flex-grow m-3"
        animate={{ scale: [0, 1.1, 1] }}
        transition={{ duration: 0.4, delay: Math.random() + 0.5 }}
        onClick={() => setOpenModal(true)}
        // style={{
        //   backgroundImage: `url(${image})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        // }}
      >
        <motion.div
          className="w-96 h-48 flex flex-grow items-center justify-center shadow-md cursor-pointer bg-gray-300  rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1 }}
        >
          <h2 className="text-2xl tracking-widest text-white">
            {name.toUpperCase()}
          </h2>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed text-gray-500 flex items-center justify-center overflow-auto bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0"
          >
            <div
              ref={modal}
              className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 mx-8 w-1/2 rounded"
            >
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="text-lg leading-6 font-medium text-gray-900">
                    {name}
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                  <div>
                    <img src={image} />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <motion.button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpenModal(false)}
                  whileTap={{scale: 1.1}}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
}
