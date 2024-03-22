def make_bricks(small, big, goal):
    # Calculate the maximum length that can be achieved with available bricks
    max_length = small + big * 5

    # Check if the goal is within the achievable range
    return max_length >= goal and goal % 5 <= small