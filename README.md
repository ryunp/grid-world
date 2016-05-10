###Grid World
A small grid of animated ASCII characters.

#####Demo
[Git Hosted](http://ryunp.github.io/grid-world)

#####Info
This is a system modeled after the [Eloquent Javascript exercise](http://www.eloquentjavascript.net/07_elife.html). Instead of global scoping all functions and vars I've instead applied an object-oriented approach.

#####Instructions
Just watch and enjoy. Which species will be victorious? The consuming beasts or the helpless plant life?

The map is:

    ############################
    #      #++++#      o     +##
    #     . ++               ++#
    #+        +#####          +#
    ##++      +#+++#    ##+    #
    ###+         +##    +#+    #
    #++         ###+     #+    #
    #   +###                   #
    #   ##++     o          ++ #
    # o +#+        .     ##### #
    #    ####           ##+++# #
    #   +#++#   #     ###      #
    #   ## +##  +#+   #+      +#
    #  ##         #+  ##     ++#
    #   #         +#  +#+     +#
    #                 ##   #   #
    ## ####               +#   #
    #+++++###         ######   #
    #+   +++#     o   #++#     #
    #     ++#  #      #+       #
    #          #+         ######
    # ####     ##+        #    #
    #    #     ###        # ## #
    #### #        .     # # +# #
    #    # o          ++#    # #
    # ######################## #
    #   +++       +++   +      #
    ############################

The symbols are:

    ' ': Empty
    '#': Wall
    'o': PlantEater
    '+': Plant
    '.': Walker
