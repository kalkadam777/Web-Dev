def make_chocolate(small, big, goal):
    # Calculate the maximum number of big bars that can be used
    big_bars_needed = min(big, goal // 5)
    
    # Calculate the remaining goal after using big bars
    remaining_goal = goal - (big_bars_needed * 5)
    
    # If there are enough small bars to fulfill the remaining goal, return it
    if small >= remaining_goal:
        return remaining_goal
    
    # Otherwise, it can't be done
    return -1